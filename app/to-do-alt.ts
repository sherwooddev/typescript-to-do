class Task {
  done: boolean = false;

  constructor (public description: string, public priority: string) {
    this.done = false;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes', 'Medium'));
console.log(tasks);
