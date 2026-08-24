function greet_students(names: string[], min_length: number): void {
  for (const name of names) {
    if (name.length >= min_length) {
      console.log(`Hello, ${name}! Your name is long enough.`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
}

const students: string[] = ["Alice", "Bob", "Charlie", "David"];
greet_students(students, 5);