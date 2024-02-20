
function Contact() {
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white bg-opacity-40 text-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Entre em Contato</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value="Nome"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value="email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value="Sua mensagem aqui"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Contact