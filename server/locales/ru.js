// @ts-check

export default {
  translation: {
    appName: 'Task manager',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          failure: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          failure: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
        edit: {
          failure: 'Вы не можете редактировать данного пользователя',
        },
        update: {
          success: 'Пользователь успешно обновлен',
          failure: 'Не удалось обновить пользователя',
        },
        delete: {
          success: 'Пользователь успешно удален',
          failure: 'Вы не можете удалить данного пользователя',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      statuses: {
        create: {
          failure: 'Не удалось создать статус',
          success: 'Статус успешно создан',
        },
        update: {
          success: 'Статус успешно обновлен',
          failure: 'Не удалось обновить статус',
        },
        delete: {
          success: 'Статус успешно удален',
          failure: 'Вы не можете удалить данный статус',
        },
      },
      tasks: {
        create: {
          failure: 'Не удалось создать задачу',
          success: 'Задача успешно создана',
        },
        update: {
          success: 'Задача успешно обновлена',
          failure: 'Не удалось обновить задачу',
        },
        delete: {
          success: 'Задача успешно удалена',
          failure: 'Вы не можете удалить данную задачу',
        },
      },
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        statuses: 'Статусы',
        tasks: 'Задачи',
      },
    },
    views: {
      fields: {
        id: 'ID',
        name: 'Имя',
        createdAt: 'Дата создания',
        actions: 'Действия',
      },
      submit: {
        create: 'Создать',
        save: 'Сохранить',
        edit: 'Изменить',
        delete: 'Удалить',
      },
      session: {
        new: {
          title: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        fullName: 'Полное имя',
        lastName: 'Фамилия',
        password: 'Пароль',
        email: 'Email',
        new: {
          title: 'Регистрация',
        },
        edit: {
          title: 'Редактирование пользователя',
        },
        errors: {
          firstName: 'Должно содержать минимум 1 символ',
          lastName: 'Должно содержать минимум 1 символ',
          email: 'Должно быть формата email',
          password: 'Должно содержать минимум 8 символов: минимум 1 заглавная, 1 маленькая буква и 1 специальный символ',
        },
      },
      statuses: {
        edit: {
          title: 'Редактирование статуса',
        },
        new: {
          title: 'Создание статуса',
        },
      },
      tasks: {
        status: 'Статус',
        description: 'Описание',
        executor: 'Исполнитель',
        creator: 'Создатель',
        options: 'Опции',
        filter: {
          isCreatorUser: 'По создателю',
          submit: 'Отфильтровать',
        },
        new: {
          create: 'Создать задачу',
          title: 'Создание задачи',
        },
        edit: {
          title: 'Обновление задачи',
        },
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
    },
  },
};
