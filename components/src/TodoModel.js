class TodoModel {
    constructor(title, completed, priority) {
        this.title = title;
        this.completed = completed || false;
        this.priority = priority || false;
        this.createdAt = new Date();
    }
}

module.exports = TodoModel;