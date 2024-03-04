function Contact() {
  return (
    <div className="flex items-center bg-cyan-500 min-h-screen">
      <div className="max-w-md mx-auto p-11 bg-white bg-opacity-25 text-white rounded-lg shadow-md ">
        <h1 className="text-2xl font-bold mb-4">Entre em Contato</h1>
        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome completo"
              className="w-full px-3 py-2 border border-gray-900 rounded-md text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@exemplo.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Sua mensagem aqui"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-sky-900 text-white py-2 px-4 rounded-md hover:bg-sky-700">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
