export const AuthService = {
    login: async (username: string, password: string): Promise<string | null> => {
      try {
        const response = await fetch("https://api.ax01.dev/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          // Almacenar el token en localStorage
          localStorage.setItem('token', data.token);
          return data.token;
        } else {
          console.error("Error de autenticación:", response.status, response.statusText);
          return null;
        }
      } catch (error) {
        console.error("Error de red:", error);
        return null;
      }
    },
  
    logout: (): void => {
      // Limpiar el token al cerrar sesión
      localStorage.removeItem('token');
    },
  
    checkAuthentication: (): boolean => {
      // Verificar si el usuario está autenticado
      const token = localStorage.getItem('token');
      return token !== null && token !== undefined;
    },
  };