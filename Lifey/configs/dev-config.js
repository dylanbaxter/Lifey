 var _config =
    {
        app: {
            enableDb: false,
            dbUrl: 'mongodb://dylan_db:3lf-UP!@ds056789.mlab.com:56789/dylanbaxter_com',
            enableWebsockets: true,
            sockets: ['application', 'debug', 'system', 'user']
        },
        public: {
            profiles: {
                dylan: {
                    name: "Dylan",
                    admin: "Scout's Honor, Sir!",
                    state: {
                        lastSaved: 'never',
                        alerts: [
                            { application: 'Monitoring', description: "There's a hard freeze tonight dude, cover the plants!" },
                            { application: 'Budget', description: "You are late on teh house payment!" },
                            { application: 'Monitoring', description: "Something else happened!" }
                        ],
                        apps: [
                            {
                                id: 'BudgetMonster',
                                title: 'Budget Monster',
                                description: 'An attempt at planning my income and bill payments over time.',
                                isDirty: false,
                                saves: [
                                    {
                                        id: 'numero-uno',
                                        name: "My First Budget, yay!",
                                        bills: [
                                            { recurrance: "monthly", day: "1", title: "Home Mortgage", amount: "1250" },
                                            { recurrance: "monthly", day: "1", title: "Dreamhost", amount: "10.95" },
                                            { recurrance: "monthly", day: "3", title: "State Farm Truck Insurance", amount: "114.73" },
                                            { recurrance: "monthly", day: "6", title: "APS", amount: "60" },
                                            { recurrance: "monthly", day: "8", title: "Verizon", amount: "160" },
                                            { recurrance: "monthly", day: "17", title: "Truck Payment", amount: "400.00" },
                                            { recurrance: "monthly", day: "17", title: "MyFedLoan", amount: "250.00" },
                                            { recurrance: "monthly", day: "19", title: "CapitalOne", amount: "300.00" }
                                        ],
                                        income: [
                                            { title: "Brittany Rent", recurrance: "monthly", day: "1", amount: "375.00" },
                                            { title: "NAU Pay Day", recurrance: "biweekly", start_date: "01/06/2017", amount: "1528.30" }
                                        ],
                                        expenses: []
                                    }
                                ]
                            },
                            { id: 'MyProjects', title: 'My Projects', description: 'Collecting some ideas and resources about the many projects I work on.', isDirty: false },
                            { id: 'Monitoring', title: 'Monitoring', description: 'Tracking and displaying real-time IoT device data for various projects, see above :)', isDirty: false }
                        ],
                        tasks: []
                    },
                }
            }
        }
    };


var Config = function () { };

Config.prototype.app = function () {
    return _config.app;
}

Config.prototype.WholeThing = function () {
    return _config;
}

Config.prototype.profile = function (name) {
    return _config.profiles[name];
}

module.exports = Config;

