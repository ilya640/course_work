  // Получаем все ссылки на фильтры
  const breadcrumbLinks = document.querySelectorAll('.breadcrumbs-projects__link');

  // Функция для установки активной кнопки
  function setActiveLink(link) {
      // Удаляем класс 'active' у всех ссылок
      breadcrumbLinks.forEach(link => link.classList.remove('active'));
      // Добавляем класс 'active' к выбранной ссылке
      link.classList.add('active');
  }

  // Слушаем клик по каждой ссылке
  breadcrumbLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Отменяем стандартное поведение ссылки
          const range = link.getAttribute('data-range'); // Получаем диапазон из атрибута data-range

          // Устанавливаем активную кнопку
          setActiveLink(link);

          // Фильтруем проекты по выбранному диапазону
          filterProjects(range);
      });
  });

  // Устанавливаем активную кнопку по умолчанию на "За все время"
  window.addEventListener('load', () => {
      const defaultLink = document.querySelector('.breadcrumbs-projects__link[data-range="all"]');
      setActiveLink(defaultLink); // Устанавливаем активность на кнопку "За все время"
  });

  // Функция для фильтрации проектов по диапазону дат
  function filterProjects(range) {
      const projects = document.querySelectorAll('.project'); // Получаем все проекты

      // Перебираем все проекты
      projects.forEach(project => {
          const startYear = parseInt(project.getAttribute('data-start-year'));
          const endYear = parseInt(project.getAttribute('data-end-year'));

          let showProject = false;

          // Фильтрация в зависимости от выбранного диапазона
          switch (range) {
              case 'all':
                  showProject = true; // Показываем все проекты
                  break;
              case '2010-2020':
                  if (startYear >= 2010 && endYear <= 2020) {
                      showProject = true;
                  }
                  break;
              case '2000-2010':
                  if (startYear >= 2000 && endYear <= 2010) {
                      showProject = true;
                  }
                  break;
              case '1990-2000':
                  if (startYear >= 1990 && endYear <= 2015) {
                      showProject = true;
                  }
                  break;
              default:
                  showProject = false;
                  break;
          }

          // Показываем или скрываем проект
          if (showProject) {
              project.style.display = 'grid';
          } else {
              project.style.display = 'none';
          }
      });
  }