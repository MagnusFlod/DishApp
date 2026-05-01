module.exports = (sequelize, Sequelize) =>
{
	const Dish = sequelize.define(
		'Dish',
		{
			name:
			{
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			country:
			{
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			}
		},
		{
			timestamps: false,
            indexes:
            [
                {
                    unique: true,
                    fields: ['name', 'country']
                }
	        ]
		}
	);

	return Dish;
};