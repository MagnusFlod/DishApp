class DishesService
{
    constructor(db)
    {
        this.Dish = db.Dish;
    }

    // POST-function. Creates a dish with name and country-column
    async create(name, country)
    {
        // Figuring if a dish already exists
        const existing = await this.Dish.findOne
        ({
            where: { name, country }
        });

        // If already existing, a message occours
        if (existing)
        {
            return { message: "Dish already exists for this country" };
        }

        // If all goes well, the dish is created
        return this.Dish.create
        ({
            name,
            country
        });
    }

    // Function for the GET all endpoint. Returns all dishes
    async getAll()
    {
        return this.Dish.findAll();
    }

    // Returns a dish by the dishname. For instance in postman http://localhost:3000/dishes/pizza, returns the dish, pizza and country
    async getByName(dishname)
    {
        return this.Dish.findAll
        ({
            where: { name: dishname }
        });
    }

    // Function to DELETE a dish by provided dishname
    async deleteByName(dishname)
    {
        return this.Dish.destroy
        ({
            where: { name: dishname }
        });
    }
}

module.exports = DishesService;