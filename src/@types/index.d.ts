declare global {
  interface Todo {
    title: string,
    description: string,
    id: number
  }

  interface TodoInputData {
    title: string,
    description: string,
  }
}

export {}