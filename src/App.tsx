import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Services from './components/services';

const App: React.FC = () => {
  // Estado para controlar el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // Estado para controlar la pantalla de carga
  const [loading, setLoading] = useState(true);

  // Actualizar la clase del modo oscuro en el <html> cuando cambia el estado
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Simular tiempo de carga de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Cambia este tiempo para simular tiempos de carga más largos o más cortos

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, []);

  // Alternar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mostrar loader si `loading` es verdadero, de lo contrario, muestra el contenido de la aplicación
  return loading ? (
    <Loader />
  ) : (
    <div className="App bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Header />

      {/* Botón para alternar el modo oscuro */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-lg border border-gray-400 dark:border-gray-600"
        >
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>

      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Curriculum />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;