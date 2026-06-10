//https://sequelize.org/docs/v6/other-topics/read-replication/
const sequelize = require('./config/db');
const Employee = require('./models/Employee');

/*async function syncDatabase() {
    console.log("Come under syncDatabse");
  await sequelize.sync({ alter: true });
  console.log('Database synced');
}

syncDatabase();*/

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');

    await sequelize.sync({ alter: true });
    //console.log(Employee.getTableName());
    //Read Data from the database
    /*const employees = await Employee.findAll({
      attributes: ['first_name', 'email'],
      limit: 10,                    // limits to 10 rows
      order: [['first_name', 'ASC']]
    });
    const jsonData = employees.map(emp => emp.toJSON());
    console.log(jsonData);*/

   //Insert data into the table
    /*const jane = await Employee.create({ first_name: 'Jane', last_name: 'Doe',email:'jane_deo@yopmail.com',salary:50000});
    console.log("Jane's auto-generated ID:", jane.id);*/

    //Update data
    /*const [affectedRows] = await Employee.update(
      { last_name: 'Doe5' },
      {
        where: {
          last_name: 'Deo',
        },
      },
    );

    if (affectedRows > 0) {
      console.log('Record was updated');
    } else {
      console.log('No record was updated (no matching rows found)');
    }*/

   //Delete Records
    const deletedCount = await Employee.destroy({
      where: {
        first_name: 'Jane',
      },
    });

    if (deletedCount > 0) {
      console.log(`${deletedCount} record(s) were deleted`);
    } else {
      console.log('No records were deleted (no matching rows found)');
    }

    // Truncate the table
    /*await Employee.destroy({
      truncate: true,
    });*/
  } catch (err) {
    console.error(err);
  }
})();