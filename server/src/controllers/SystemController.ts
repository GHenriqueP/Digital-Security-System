import { Request, Response } from "express";
import { database } from "../database";

// =========== Route to get registered systems
export class ListSystemsController {
  async handle(request: Request, response: Response) {
    const { description, acronym, email } = request.query;

    try {
      let systems;

      if (description || acronym || email) {
        systems = await database.system.findMany({
          where: {
            OR: [
              {
                description: String(description) || '',
              },
              {
                acronym: String(acronym) || '',
              },
              {
                email: String(email) || '',
              },
            ],
          }
        });
      } else {
        systems = await database.system.findMany();
      }

      if (email && !isValidEmail(String(email))) {
        return response.status(400).json({ message: 'E-mail inválido' });
      }

      response.json(systems);
    } catch (error) {
      console.error('Erro ao buscar sistemas:', error);
      response.status(500).json({ message: 'Erro ao buscar sistemas' });
    }
  }
}

// =========== Route to register a new system
export class CreateSystemController {
  async handle(request: Request, response: Response) {
    const { description, acronym, email, url, userId } = request.body;

    try {
      // Rules of validation
      if (!description || !acronym) {
        return response.status(400).json(
          { message: 'Descrição e sigla são obrigatórios' }
        );
      }

      if (description.length > 100 || acronym.length > 10) {
        return response.status(400).json(
          { message: 'Descrição deve ter no máximo 100 caracteres e sigla no máximo 10 caracteres' }
        );
      }

      if (email && email.length > 100) {
        return response.status(400).json(
          { message: 'E-mail de atendimento deve ter no máximo 100 caracteres' }
        );
      }

      if (url && url.length > 50) {
        return response.status(400).json(
          { message: 'URL deve ter no máximo 50 caracteres' }
        );
      }

      if (email && !isValidEmail(email)) {
        return response.status(400).json({ message: 'E-mail inválido' });
      }

      // Create the System in database
      const system = await database.system.create({
        data: {
          description,
          acronym,
          email,
          url,
          user: {
            connect: { id: userId },
          },
        },
      });

      response.json(system);
    } catch (error) {
      console.error('Erro ao adicionar sistema:', error);
      response.status(500).json({ message: 'Erro ao adicionar sistema' });
    }
  }
}

// =========== Route to edit an existing system
export class AlterSystemController {
  async handle(request: Request, response: Response) {
    try {
      const systemId = parseInt(request.params.id);
      const { description, acronym, email, url, modJustify, isActive, userId } = request.body;

      // Verify if system exists
      const existingSystem = await database.system.findUnique({
        where: {
          id: systemId,
        },
      });

      if (!existingSystem) {
        return response.status(404).json({ message: 'Sistema não encontrado' });
      }

      // Rules of validation
      if (!description || !acronym || !modJustify) {
        return response.status(400).json({ message: 'Preencha os campos obrigatórios' });
      }

      switch (true) {
        case acronym.length > 10:
          return response.status(400).json({ message: 'Sigla deve ter no máximo 10 caracteres' });
        case email && email.length > 100:
          return response.status(400).json({ message: 'E-mail de atendimento deve ter no máximo 100 caracteres' });
        case url && url.length > 50:
          return response.status(400).json({ message: 'URL deve ter no máximo 50 caracteres' });
        case description && description.length > 100:
          return response.status(400).json({ message: 'Descrição deve ter no máximo 100 caracteres' });
        case modJustify && modJustify.length > 500:
          return response.status(400).json({ message: 'Justificativa de alteração deve ter no máximo 500 caracteres' });
        default:

          if (email && !isValidEmail(email)) {
            return response.status(400).json({ message: 'E-mail inválido' });
          }


          // Update the system in database
          const updatedSystem = await database.system.update({
            where: {
              id: systemId,
            },
            data: {
              description,
              acronym,
              email,
              url,
              modJustify,
              isActive,
              user: {
                connect: { id: userId },
              },
            },
          });

          response.json(updatedSystem);
      }
    } catch (error) {
      console.error('Erro ao alterar o sistema:', error);
      response.status(500).json({ message: 'Erro ao alterar o sistema' });
    }
  }
}

// Function that validates the email format
function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}
