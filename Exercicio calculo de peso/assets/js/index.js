const recieveData = () => {
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const weight = Number(e.target.peso.value);
    const height = Number(e.target.altura.value);

    console.log(weight, height);

    calculateIMC(weight, height);
  });
};

const RecieveDataIsValid = (weight, height) => {
  if (!weight || !height) {
    const msg = "Preencha todos os campos com itens válidos!";
    PrintResult(msg, false);
    return false;
  }

  if (weight <= 0 || height <= 0) {
    const msg = "Peso e altura devem ser maiores que zero";
    PrintResult(msg, false);
    return false;
  }

  return true;
};

const calculateIMC = (weight, height) => {
  if (!RecieveDataIsValid(weight, height)) return;

  const imc = (weight / height ** 2).toFixed(2);

  let msg = `Seu IMC é ${imc} e você está `;

  if (imc >= 39.9) {
    msg += "com obesidade grau 3";
    PrintResult(msg, false);
  } else if (imc >= 34.9) {
    msg += "com obesidade grau 2";
    PrintResult(msg, false);
  } else if (imc >= 29.9) {
    msg += "com obesidade grau 1";
    PrintResult(msg, false);
  } else if (imc >= 24.9) {
    msg += "com sobrepeso";
    PrintResult(msg, false);
  } else if (imc >= 18.5) {
    msg += "com peso normal";
    PrintResult(msg, true);
  } else {
    msg += "abaixo do peso";
    PrintResult(msg, false);
  }
};

const createInitialElement = (element, data, success) => {
  const newElement = document.createElement(element);
  newElement.classList.add(
    `paragraph-result-${success ? "success" : "notSuccess"}`
  );
  newElement.innerHTML = data;

  return newElement;
};

const PrintResult = (msg, success) => {
  const result = document.querySelector(".result");
  result.innerHTML = "";

  const newElement = createInitialElement("p", msg, success);

  result.appendChild(newElement);
};

recieveData();
