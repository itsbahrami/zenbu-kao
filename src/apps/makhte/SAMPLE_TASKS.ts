import { Task } from './Task'
import { TaskStatus } from './TaskStatus'

export const SAMPLE_TASKS: Task[] = [
  Task.create(
    'طراحی معماری میکروسرویس',
    'تعیین مرزهای سرویس‌ها و ارتباطات بین آن‌ها',
    TaskStatus.Backlog,
  ),
  Task.create(
    'پیاده‌سازی گیت‌ویب هوک',
    'تنظیم وب‌هوک برای تریگر پایپلاین CI/CD',
    TaskStatus.Todo,
  ),
  Task.create(
    'رفع باگ نمایش تاریخ',
    'تاریخ‌ها در تایم‌زون درست نمایش داده نمی‌شوند',
    TaskStatus.Doing,
  ),
  Task.create(
    'بررسی درخواست تغییر',
    'درخواست تغییر از تیم دیزاین دریافت شده، نیاز به تأیید',
    TaskStatus.Waiting,
  ),
  Task.create(
    'آپگرید کتابخانه axios',
    'ارتقا به نسخه 1.7 و رفع خطاهای سازگاری',
    TaskStatus.Done,
  ),
  Task.create('افزودن دکمه صادرات خروجی', undefined, TaskStatus.Backlog),
  Task.create('بهینه‌سازی کوئری‌های دیتابیس', undefined, TaskStatus.Todo),
  Task.create('طراحی UI جدید برای داشبورد', undefined, TaskStatus.Doing),
  Task.create('تست کارایی در load بالا', undefined, TaskStatus.Waiting),
  Task.create('مستندسازی API', undefined, TaskStatus.Done),
]
