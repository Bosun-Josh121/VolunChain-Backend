import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = async (req: Request, res: Response): Promise<void> => {
    const { walletAddress } = req.body;

    try {
      const token = await this.authService.authenticate(walletAddress);
      res.json({ token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(401).json({ message: error.message });
      } else {
        res.status(401).json({ message: "Unknown error" });
      }
    }
  };

  protectedRoute = (req: Request, res: Response): void => {
    if (req.user) {
      res.send(`Hello ${req.user.role}, your ID is ${req.user.id}`);
    } else {
      res.status(401).json({ message: 'User not authenticated' });
    }
  };
}

export default new AuthController();