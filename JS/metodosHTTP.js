const verTodasLasTareas = async () => {
  try {
    const response = await fetch(
      "https://65c180d7dc74300bce8dac91.mockapi.io/api/task"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// verTodasLasTareas();

const verUnaTarea = async (idTask) => {
  try {
    const response = await fetch(
      "https://65c180d7dc74300bce8dac91.mockapi.io/api/task/" + idTask
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

verUnaTarea(5);
