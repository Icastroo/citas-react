const Paciente = () => {
  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray700 uppercase">
        nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Ignacio</span>
      </p>

      <p className="font-bold mb-3 text-gray700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10 Diciembre de 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          pariatur dolores accusantium ullam necessitatibus. Eum porro a,
          quisquam dolorem officia sed dolore nostrum animi repellendus neque
          quasi! Officia, laboriosam. Et.
        </span>
      </p>
    </div>
  )
}

export default Paciente;
