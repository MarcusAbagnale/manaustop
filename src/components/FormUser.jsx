import { useState } from "react";
import emailjs from "emailjs-com";

const FormUser = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "Olá, quero fazer parte desta comunidade!",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        telefone: formData.telefone,
        mensagem: formData.mensagem,
      };

      await emailjs.send(
        "service_nofu1i9",
        "template_8l0m0qr",
        templateParams,
        "c_yFKHZJiFfFAeTA4"
      );

      alert("Mensagem enviada com sucesso!");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao enviar mensagem. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="nome" className="text-white">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone" className="text-white">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem" className="text-white ">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            className=" px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Mensagem"
          />
        </div>
        <div className="text-center mt-6">
        <button type="submit" className="btn-submit bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
          Enviar Mensagem
        </button>
        </div>
      </form>
    </>
  );
};

export default FormUser;
