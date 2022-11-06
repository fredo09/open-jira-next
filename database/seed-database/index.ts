/**
 * Informacion ficticia que sireve para iniciar la base de datos
 **/

interface ISeedData {
  entries: ISeedEntry[];
}

interface ISeedEntry {
  description: String;
  status: String;
  createAt: Number;
}

export const seedData: ISeedData = {
  entries: [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate",
      createAt: Date.now(),
      status: "pending",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate 3",
      createAt: Date.now() - 100000,
      status: "in-progress",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate2",
      createAt: Date.now() - 10000,
      status: "finished",
    },
  ],
};
