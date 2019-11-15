export const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: StartPage,
            navigationOptions: {
                tabBarLabel: "Startseite",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={30} color="#900" />
                )
            }
        },
        Settings: {
            screen: Place,
            navigationOptions: {
                tabBarLabel: "Test",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="cog" size={30} color="#900" />
                )
            }
        }
    },
    {
        order: ["Home", "Settings"],
        tabBarOptions: {
            activeTintColor: "#D4AF37",
            inactiveTintColor: "gray",
            style: {
                backgroundColor: "white"
            }
        }

    },
);