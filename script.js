//Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of Sami's SOS have been changed by radiation.

// For example, Earth receives SOSTOT. Sami's original message was SOSSOS. Two of the message characters were changed in transit.

// Function Description

// Complete the marsExploration function in the editor below. It should return an integer representing the number of letters changed during transmission.

// marsExploration has the following parameter(s):

// input: the string as received on Earth



function signalDetermination(input) {
  let signal = "SOS".repeat(input.length / 3);
  let count = 0;

  
  for (let i = 0; i < input.length; i++) {
    if (signal[i] != input[i]) {
      count++;
    }
  }
  return count;
}
signalDetermination("OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS");