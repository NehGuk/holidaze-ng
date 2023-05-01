export default function useTestHook(url, fetchOptions) {
  const data1 = `${url} aqui`;
  const coisas = `${fetchOptions} aqui`;

  return { data1, coisas };
}
