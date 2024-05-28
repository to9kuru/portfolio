document.addEventListener("DOMContentLoaded", () => {
    const uploadDateElements = document.querySelectorAll('.upload-date');
    const uploadDates = [
        { date: '2024-05-29', element: uploadDateElements[0] },
        { date: '2023-11-28', element: uploadDateElements[1] }
        // 他の作成物の日付も同様に追加
    ];

    uploadDates.forEach(item => {
        const uploadDate = new Date(item.date);
        const today = new Date();
        const diffTime = Math.abs(today - uploadDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        const diffMonths = Math.floor(diffDays / 31);
        const diffYears = Math.floor(diffMonths / 12);

        if (diffDays < 31) {
            if (diffDays === 0) {
                item.element.textContent = '今日';
            } else if (diffDays === 1) {
                item.element.textContent = '昨日';
            } else {
                item.element.textContent = `${diffDays}日前`;
            }
        } else if (diffMonths < 12) {
            item.element.textContent = `${diffMonths}ヶ月前`;
        } else {
            item.element.textContent = `${diffYears}年前`;
        }
    });
});
