import "./style.css";

interface Slip {
  id: number;
  advice: string;
}
interface SlipObject {
  slip: Slip;
}

const URL = "https://api.adviceslip.com/advice";
const content = document.getElementById("content")! as HTMLDivElement;
const btnRandom = document.getElementById("btn-random")! as HTMLButtonElement;

// Loader
function setLoader() {
  content.innerHTML = `
  <div
    style="border-top-color: transparent"
    class="border-primary-400 h-8 w-8 animate-spin rounded-full border-2"
  ></div>
  `;
}

async function fetchAdvice() {
  const response = await fetch(URL);
  return response.json() as Promise<SlipObject>;
}

function setSlipToDocument(slip: Slip) {
  const slipTemplate = `
  <h2 class="text-primary-400 text-sm tracking-[0.35em]">
    ADVICE #<span id="slip-id">${slip.id}</span>
  </h2>
  <p
    id="quote"
    class="text-primary-100 mt-6 text-2xl leading-snug sm:text-[1.75rem]"
  >
    "${slip.advice}"
  </p>
  `;
  content.innerHTML = slipTemplate;
}

async function getAndSetSlip() {
  setLoader();

  try {
    const data = await fetchAdvice();

    setSlipToDocument(data.slip);
  } catch (error) {
    console.error("Something wrong!");
  }
}

btnRandom.addEventListener("click", async () => {
  await getAndSetSlip();
});

// Set first time user enters our website
getAndSetSlip();
