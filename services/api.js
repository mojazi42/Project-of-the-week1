export const fetchCompanyDetails = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("HTTP Error: " + response.status);

        const data = await response.json();
        document.getElementById("companyName").value = data.name || "";
        document.getElementById("crNumber").value = data.id || "";
        document.getElementById("email").value = data.email || "";
    } catch (error) {
        console.error("Error fetching company details:", error);
    }
};

export const fetchAllCompanies = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch company data");

        const data = await response.json();
        document.getElementById("apiDataList").innerHTML = data
            .map((company) => `<li>${company.name} - ${company.email}</li>`)
            .join("");
    } catch (error) {
        console.error("Error fetching company list:", error);
    }
};
