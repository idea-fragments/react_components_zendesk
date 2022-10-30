export function* newIdGenerator() {
    let id = 0
    while (true) { yield id++ }
}

export const nextId = (generator :Generator) :number => generator.next().value
