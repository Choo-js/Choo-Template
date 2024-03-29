import { Locomotive } from "@choo-js/core";
import { ticketing } from "@choo-js/ticketing";
import { ExampleController } from "../controllers/control";
import { FrontendController } from "@choo-js/frontend";

const run = async () => {
    console.log("Starting app...");
    console.time("App started in");

    const instance = await Locomotive.new();

    await instance.addCar(ticketing, {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        database: "choo_ticketing_dev",
    });

    instance.controller(new ExampleController());
    instance.controller(new FrontendController());

    console.timeEnd("App started in");

    await instance.start();
};

run();
