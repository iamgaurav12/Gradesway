import { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      if (response.status === 200) {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <CardHeader className="p-4">
          <h2 className="text-lg font-bold">Login</h2>
        </CardHeader>
        <CardContent className="p-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
        </CardContent>
        <CardFooter className="p-4">
          <Button onClick={handleLogin} className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
