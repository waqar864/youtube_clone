import { db } from "@/db";
import { categories } from "@/db/schema";


//TODO: create a script to categorie
const categoryNames = [
    "Cars and Vehicles",    
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Fimlm and animations",
    "Health",
    "Music",
    "News",
    "Science",
    "Sports",
    "Technology",
    "Travel",
    "Other"
]

async function main (){
    console.log("Seeding categories...");
    try {
        const values = categoryNames.map((name) => ({
            name,
            description: `Videos related to ${name.toLocaleLowerCase()}`,
        }));
        await db.insert(categories).values(values);
        console.log("Categories seeded successfully");
    } catch (error) {
        console.error("Error seeding categories", error);
        process.exit(1);
    }
}
main();