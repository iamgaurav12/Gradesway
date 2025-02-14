import { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const QuizForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!title || !description) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:5000/quizzes", { title, description });
      window.location.href = "/dashboard";
    } catch (err) {
      setError("An error occurred while creating the quiz.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <h2 className="text-lg font-bold">Create Quiz</h2>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4"
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizForm;
