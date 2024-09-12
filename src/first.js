// const message = 'Hello Noode';

// console.log(message);

// import fs from 'fs';
// import path from 'node:path';

// // Перевірте перед запуском функції наявність файлу text.txt в папці src
// const filePath = path.join(process.cwd(), 'src', 'text.txt');

// const fileContent = fs.readFileSync(filePath);

// console.log(fileContent.toString('utf8'));

// Читання файлу
// Перший варіант
/*
fs.readFile(filePath, (err, fileContent) => {
  console.log(fileContent.toString());
});
*/

// Або можете одразу вказати кодування як аргумент функції
// fs.readFile(filePath, 'utf-8', (err, fileContent) => {
//   console.log(fileContent);
// });

// import fs from 'fs/promises';
// import path from 'node:path';

// Читання файлу
// const filePath = path.join(process.cwd(), 'src', 'text.txt');
// (async () => {
//   try {
//     const data = await fs.readFile(filePath, 'utf8');
//     console.log('Вміст файлу:', data);
//   } catch (err) {
//     console.error('Помилка читання файлу:', err);
//   }
// })();

// Запис даних у файл
// const filePath = path.join(process.cwd(), 'src', 'text.txt');
// (async () => {
//   try {
//     const text = 'Smth else';
//     await fs.writeFile(filePath, text);
//     console.log('Text successfuly writed to file');
//   } catch (error) {
//     console.error('Error', error);
//   }
// })();

// Додавання даних в кінець файлу
// const filePath = path.join(process.cwd(), 'src', 'text.txt');
// (async () => {
//   const data = 'Це дані, які ми додаємо до файлу.';
//   try {
//     await fs.appendFile(filePath, data, 'utf8');
//     console.log('Дані успішно додані до файлу.');
//   } catch (err) {
//     console.error('Помилка додавання даних до файлу:', err);
//   }
// })();

// Створення нового файлу
// const newFilePath = path.join(process.cwd(), 'src', 'newText.txt');
// (async () => {
//   try {
//     const text = 'Smth else';
//     await fs.writeFile(newFilePath, text);
//     console.log('Text successfuly writed to file');
//   } catch (error) {
//     console.error('Error', error);
//   }
// })();

// Видалення файлу
// const filePath = path.join(process.cwd(), 'src', 'text.txt');
// (async () => {
//   try {
//     await fs.unlink(filePath);
//     console.log('File successfuly deleted');
//   } catch (error) {
//     console.error('Error', error);
//   }
// })();

// Зміна імені файлу
// const projectPath = path.join(process.cwd(), 'src');

// (async () => {
//   try {
//     fs.rename(
//       path.join(projectPath, 'text.txt'),
//       path.join(projectPath, 'data.txt'),
//     );
//     console.log('File successfuly renamed');
//   } catch (error) {
//     console.error('Error', error);
//   }
// })();

// Отримуємо список файлів і каталогів у поточному каталозі
// (async () => {
//   try {
//     const files = await fs.readdir('./src');
//     console.log('Список файлів і каталогів:', files);
//   } catch (err) {
//     console.error('Помилка отримання списку файлів і каталогів:', err);
//   }
// })();

// Перевіряємо доступність файлу або каталогу за вказаним шляхом
// (async () => {
//   const projectPath = path.join(process.cwd(), 'src');
//   try {
//     await fs.access(projectPath);
//     console.log(`Файл або каталог '${projectPath}' доступний.`);
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log(`Файл або каталог '${projectPath}' не існує.`);
//     } else {
//       console.error(
//         `Помилка перевірки доступності файлу або каталогу '${projectPath}':`,
//         err,
//       );
//     }
//   }
// })();
