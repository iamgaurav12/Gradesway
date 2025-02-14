import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db';

// Define an interface for the Quiz attributes
interface QuizAttributes {
  id?: number;
  title: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Extend Sequelize's Model class with Quiz attributes
class Quiz extends Model<QuizAttributes> implements QuizAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Define the Quiz model
Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Quiz',
  }
);

export default Quiz;
