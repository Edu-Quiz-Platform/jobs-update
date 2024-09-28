// Sample data for Medical and Engineering students
const students = {
    medical: [
        /* SHAHEED BENAZIRABAD*/
        { rollNumber: '261450', name: 'AWAIS ALI', cast: 'ARAIN', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'A1' },
        
        { rollNumber: '261430', name: 'AFNAN ALI', cast: 'ARAIN', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'A1' },
        
        { rollNumber: '259270', name: 'ADINA', cast: 'RAJPUT', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'A1'},
        
        { rollNumber: '254000', name: 'TANVEER ALI', cast: 'KHOSO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '252833', name: 'ATHAR ALI', cast: 'SAHTO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '252864', name: 'KHUDA BUX', cast: 'ZARDARI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '253661', name: 'AAFTAB ALI', cast: 'BALADI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '253804', name: 'KASHIF ALI', cast: 'BALADI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '253879', name: 'MUMTAZ ALI', cast: 'OTHO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '260809', name: 'RASHID ALI', cast: 'CHANDIO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade:'B'},
        
        { rollNumber: '253898', name: 'NAEEM KHAN', cast: 'KAHERI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'B' },
        
        { rollNumber: '261421', name: 'AATIF HUSSAIN', cast: 'PARHIYAR', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'B' },

{ rollNumber: '261422', name: 'ABDUL GHAFAR', cast: 'ZARDARI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'B' },

{ rollNumber: '261423', name: 'ABDUL GHAFFAR', cast: 'DETHO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'B' },

{ rollNumber: '261424', name: 'ABDUL KAREEM', cast: 'ZARDARI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'C' },
        
        { rollNumber: '253878', name: 'MUKHTIAR ALI', cast: 'KHASKHALI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'PASS', grade: 'C' },
        
        { rollNumber: '261880', name: 'ATTA MUHAMMAD SHAH', cast: 'SHAH', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'RWH/D', grade:'___'},
        
        { rollNumber: '253877', name: 'MUKHTIAR ALI', cast: 'OTHO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-MEDICAL', result: 'RWH/UMEANS', grade: '___' },
        
        
        /* NAUSHAHRO FEROZE */
        { rollNumber: '294777', name: 'AQSA MUKHTIAR', cast: 'ARAIN', district: 'NAUSHAHRO FEROZE', group: 'PRR-MEDICAL', result: 'PASS', grade:'A1'},
        
        { rollNumber: '294604', name: 'GHAZALA', cast: 'CHANDIO', district: 'NAUSHAHRO FEROZE', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '294634', name: 'ASMA BEGUM', cast: 'CHANDIO', district: 'NAUSHAHRO FEROZE', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
        
        { rollNumber: '292080', name: 'WAJAHAT', cast: 'MASHORI', district: 'NAUSHAHRO FEROZE', group: 'PRR-MEDICAL', result: 'PASS', grade:'A'},
    ],
    
    engineering: [
        { rollNumber: '309990', name: 'ATTA MUHAMMAD SHAH', cast: 'SHAH', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'PASS', grade:'A'},

        { rollNumber: '312976', name: 'HASNAIN SHAIKH', cast: 'SHAIKH', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'PASS', grade: 'A' },
        
        { rollNumber: '309107', name: 'MUHSIN KHAN', cast: 'SAHITO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'PASS', grade: 'A' },
        
        { rollNumber: '310003', name: 'RAJA', cast: 'SIYAL', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'PASS', grade:'B'},
        
        { rollNumber: '309064', name: 'ALI GUL', cast: 'SAHTO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'PASS', grade:'B'},
        
        { rollNumber: '309063', name: 'ALI AHMED', cast: 'BUGHIO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'PASS', grade:'B'},
        
        { rollNumber: '315332', name: 'MUHAMMAD KHALID', cast: 'JAMALI', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'RWH/D', grade:'___'},
        
        { rollNumber: '309121', name: 'SAAGAR ALI', cast: 'SAHITO', district: 'SHAHEED BENAZIRABAD', group: 'PRR-ENGINEERING', result: 'FAIL', grade: '___' },
        
        /* SANGHAR */
        { rollNumber: '329890', name: 'ABDUL REHMAN', cast: 'KHOSO', district: 'SANGHAR', group: 'PRR-MEDICAL', result: 'PASS', grade: 'A1' },
    ]
};

// Function to show the modal
        function showModal() {
            document.getElementById('infoModal').style.display = 'block';
        }

        // Function to close the modal
        function closeModal() {
            document.getElementById('infoModal').style.display = 'none';
        }

        // Show the modal when the page loads
        window.onload = showModal;

        // Function to toggle WhatsApp text
        function showWhatsappText() {
            const whatsappText = document.querySelector('.whatsapp-text');
            whatsappText.style.display = whatsappText.style.display === 'block' ? 'none' : 'block';
        }

        /* Your existing functions here */
        function searchResult() {
            // Your search result logic here
        }

// Function to search result based on group and roll number
function searchResult() {
    const group = document.getElementById('groupSelect').value; // Get selected group
    const input = document.getElementById('searchInput').value.toLowerCase(); // Get entered roll number
    const resultDiv = document.getElementById('result');

    // Clear previous results
    resultDiv.innerHTML = '';

    // Check if group is selected
    if (!group) {
        resultDiv.innerHTML = '<p class="not-found">Please select a group.</p>';
        return;
    }

    // Find the student with the entered roll number
    const student = students[group].find(s => s.rollNumber === input);

    // Display student result or show not found message
    if (student) {
        resultDiv.innerHTML = `
            <table class="result-table">
                <tr><th>Roll Number</th><td>${student.rollNumber}</td></tr>
                <tr><th>Name</th><td>${student.name}</td></tr>
                <tr><th>Cast</th><td>${student.cast}</td></tr>
                <tr><th>District</th><td>${student.district}</td></tr>
                <tr><th>Group</th><td>${student.group}</td></tr>
                <tr><th>Result</th><td>${student.result}</td></tr>
                <tr><th>Grade</th><td>${student.grade}</td></tr>
            </table>
        `;
    } else {
        resultDiv.innerHTML = '<p class="not-found">No student found with the entered roll number.</p>';
    }
}
