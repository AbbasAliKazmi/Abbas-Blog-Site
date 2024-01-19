import { Request, Response, NextFunction } from 'express';

const middleware = (req: Request, res: Response, next: NextFunction) => {
    // Middleware logic goes here
    // ...
    next(); // Call next() to pass control to the next middleware or route handler
};

export default middleware;
