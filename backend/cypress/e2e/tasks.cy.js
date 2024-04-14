describe("Task", () => {
  const id = "111111111111111111111111";
  const task = {
    _id: id,
    title: "title 1",
  };
  it("should be get all tasks", () => {
    cy.api({
      method: "GET",
      url: "/tasks",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should be create a task", () => {
    cy.api({
      method: "POST",
      url: "/tasks",
      body: task,
    }).then((response) => {
      expect(response.body.task).to.have.property("title", "title 1");
      expect(response.status).to.eq(201);
    });
  });

  it("should be update a task", () => {
    cy.api({
      method: "PUT",
      url: `/tasks/${id}`,
      body: {
        title: "title 2",
      },
    }).then((response) => {
      expect(response.body.task).to.have.property("title", "title 2");
      expect(response.status).to.eq(200);
    });
  });

  it("should be find a task", () => {
    cy.api({
      method: "GET",
      url: `/task/${id}`,
    }).then((response) => {
      expect(response.body.task).to.have.property("title", "title 2");
      expect(response.status).to.eq(200);
    });
  });

  it("should be delete a task", () => {
    cy.api({
      method: "DELETE",
      url: `/task/${id}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
