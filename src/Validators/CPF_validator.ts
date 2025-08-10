import { cpf } from 'cpf-cnpj-validator';

export function isValidCpf(document: string): boolean {
  const cleaned = document?.replace(/[^\d]/g, '');
  return cpf.isValid(cleaned);
}
