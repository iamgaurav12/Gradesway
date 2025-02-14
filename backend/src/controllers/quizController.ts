import { Request, Response } from "express";
import Quiz from "../models/quizModel";

export const createQuiz = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const quiz = await Quiz.create({ title, description });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error creating quiz" });
  }
};

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.findAll();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving quizzes" });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await Quiz.destroy({ where: { id } });
    if (rowsDeleted > 0) {
      res.status(200).json({ message: "Quiz deleted" });
    } else {
      res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting quiz" });
  }
};

// Retrieve details of a specific quiz
export const getQuizById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findByPk(id);
    if (quiz) {
      res.status(200).json(quiz);
    } else {
      res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving quiz" });
  }
};

// Edit an existing quiz
export const updateQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const quiz = await Quiz.findByPk(id);
    if (quiz) {
      quiz.title = title || quiz.title;
      quiz.description = description || quiz.description;
      await quiz.save();
      res.status(200).json(quiz);
    } else {
      res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating quiz" });
  }
};
