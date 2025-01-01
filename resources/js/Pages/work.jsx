const handleSubmit = (e) => {
    e.preventDefault();

    Inertia.post(
        "/fetch-schedules",
        {
            origin: formData.origin,
            destination: formData.destination,
            date: formData.date,
            trainClass: formData.trainClass,
        },
        {
            onSuccess: (page) => {
                const results = page.props.results; // Access results passed from the controller

                // Pass results to parent if onSearch is defined
                if (onSearch && typeof onSearch === "function") {
                    onSearch(results);
                } else {
                    console.error("onSearch is not a function");
                }

                console.log("Search Results:", results);
            },
            onError: (errors) => {
                console.error("Error fetching schedules:", errors);
            },
        }
    );

    console.log("Form Data Submitted:", formData);
};
