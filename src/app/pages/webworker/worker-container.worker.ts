/// <reference lib="webworker" />
// make use of the web-worker library for compiling this file

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

addEventListener('message', (evt) => {
  console.log('worker got message: ', evt);
  // throw new Error('Test error from worker');
  const response = generateFibonacci(evt.data.param);
  postMessage(response);
});

function generateFibonacci(n: number): number {
  return n < 1
    ? 0
    : n <= 2
    ? 1
    : generateFibonacci(n - 1) + generateFibonacci(n - 2);
}