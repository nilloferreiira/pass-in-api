export function generateSlug(text: string): string {
    return text.normalize("NFD") // Normaliza para caracteres sem acentos
               .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
               .toLowerCase() // Converte para minúsculas
               .replace(/[^\w\s]/g, "") // Remove símbolos
               .replace(/\s+/g, "-"); // Substitui espaços por hífens
}
