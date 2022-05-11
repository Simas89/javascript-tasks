import number from "./tasks/1.number/index.js";
import same from "./tasks/2.same/index.js";
import math from "./tasks/3.math/index.js";
import wave from "./tasks/4.wave/index.js";
import chain from "./tasks/5.chain-reduction/index.js";
import chainInput from "./tasks/5.chain-reduction/chainInput.js";

// ---------- Task 1
const numberArr = [23, 18, 1, 1, 1, 1];

const numberResult = number(numberArr);
console.log("1.number: ", numberResult);

// ---------- Task 2
const sameString = "kokdD";

const sameResult = same(sameString);
console.log("2.same: ", sameResult);

// ---------- Task 3
const mathArr = [65, 60, 75, 55, 60, 63, 64, 45];

const mathResult = math(...mathArr);
console.log("3.math: ", mathResult);

// ---------- Task 4
const waveString = "hello";

const waveResult = wave(waveString);
console.log("4.wave: ", waveResult);

// ---------- Task 5
const chainResult = chain(chainInput);
console.log("5.chain: ", chainResult);
