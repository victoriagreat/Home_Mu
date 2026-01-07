import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('homemuUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('homemuUser', JSON.stringify(userData));
    setUser(userData);
  };

  const signup = (userData) => {
    const newUser = {
      ...userData,
      role: 'user',
      agentStatus: 'none', // none | pending | approved | rejected
    };
    localStorage.setItem('homemuUser', JSON.stringify(newUser));
    setUser(newUser);
  };

  const updateUser = (updatedFields) => {
    if (!user) return;
    const updatedUser = { ...user, ...updatedFields };
    localStorage.setItem('homemuUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const logout = () => {
    localStorage.removeItem('homemuUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}