export const renderForm = () => {
    return `
        <div class="container">
            <h2 class="text-2xl font-bold text-green-600 text-center mb-6">تسجيل المنشأة</h2>

            <form id="registrationForm" class="space-y-4">
                <label>اسم المنشأة</label>
                <input type="text" id="companyName" class="input-field" required>

                <label>رقم السجل التجاري</label>
                <input type="text" id="crNumber" class="input-field" required>

                <label>البريد الإلكتروني</label>
                <input type="email" id="email" class="input-field" required>

                <label>رقم الهاتف</label>
                <input type="tel" id="phone" class="input-field" required>

                <label>كلمة المرور</label>
                <input type="password" id="password" class="input-field" required>

                <label>تأكيد كلمة المرور</label>
                <input type="password" id="confirmPassword" class="input-field" required>

                <label>المدينة</label>
                <input type="text" id="city" class="input-field" required>

                <label>المنطقة</label>
                <input type="text" id="region" class="input-field" required>

                <label>الرمز البريدي</label>
                <input type="text" id="zip" class="input-field" required>

                <label>نوع النشاط</label>
                <select id="businessType" class="input-field" required>
                    <option value="">-- اختر نوع النشاط --</option>
                    <option value="retail">تجزئة</option>
                    <option value="service">خدمات</option>
                    <option value="manufacturing">تصنيع</option>
                    <option value="tech">تقنية</option>
                </select>

                <div class="flex items-center">
                    <input type="checkbox" id="terms" class="w-5 h-5">
                    <label for="terms" class="ml-2 text-gray-700">أوافق على <a href="#" class="text-green-600 hover:underline">الشروط والأحكام</a></label>
                </div>

                <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">تسجيل</button>
            </form>

            <button id="toggleDataBtn" class="w-full bg-blue-500 text-white py-2 rounded-lg mt-4">عرض بيانات المنشآت</button>
            <div id="apiDataDropdown" class="hidden mt-2 bg-gray-100 p-4 rounded-lg shadow">
                <ul id="apiDataList"></ul>
            </div>
        </div>
    `;
};
