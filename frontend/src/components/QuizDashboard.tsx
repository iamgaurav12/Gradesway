import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Quiz {
  id: number;
  title: string;
  description: string;
}

const QuizDashboard = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await axios.get("http://localhost:5000/quizzes");
      setQuizzes(response.data);
    };
    fetchQuizzes();
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5000/quizzes/${id}`);
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Quiz Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="shadow-lg">
            <CardHeader>
              <h3 className="text-lg font-semibold">{quiz.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{quiz.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="destructive" onClick={() => handleDelete(quiz.id)}>
                Delete
              </Button>
              <a href={`/create-quiz?id=${quiz.id}`} className="text-blue-500">
                Edit
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button className="mt-8" asChild>
        <a href="/create-quiz">Create New Quiz</a>
      </Button>
    </div>
  );
};

export default QuizDashboard;
