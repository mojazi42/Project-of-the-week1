document.addEventListener("DOMContentLoaded", () => {
    const companyNameField = document.getElementById("companyName");
    const crNumberField = document.getElementById("crNumber");
    const emailField = document.getElementById("email");
    const toggleDataBtn = document.getElementById("toggleDataBtn");
    const apiDataDropdown = document.getElementById("apiDataDropdown");
    const apiDataList = document.getElementById("apiDataList");

    const apiURL = "https://jsonplaceholder.typicode.com/users";

    // Fetch and pre-fill company details
    const fetchCompanyDetails = async () => {
        try {
            const response = await fetch(`${apiURL}/1`);
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

            const data = await response.json();

            companyNameField.value = data.name || "";
            crNumberField.value = data.id || "";
            emailField.value = data.email || "";

            console.log("Company details fetched successfully:", data);
        } catch (error) {
            console.error("Error fetching company details:", error);
            alert("حدث خطأ أثناء تحميل بيانات المنشأة.");
        }
    };

    // Fetch and display all companies in dropdown
    const fetchAllCompanies = async () => {
        try {
            const response = await fetch(apiURL);
            if (!response.ok) throw new Error("Failed to fetch company data");

            const data = await response.json();
            apiDataList.innerHTML = data
                .map((company) => `<li class="border-b p-2">${company.name} - ${company.email}</li>`)
                .join("");
        } catch (error) {
            console.error("Error fetching company list:", error);
        }
    };

    fetchCompanyDetails(); // Auto-fetch first company details

    // Toggle dropdown menu and fetch company data
    toggleDataBtn.addEventListener("click", () => {
        fetchAllCompanies();
        apiDataDropdown.classList.toggle("hidden");
    });
});
