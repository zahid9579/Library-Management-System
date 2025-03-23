from django.urls import path
from testapp.views import (
    AdminSignupView, AdminLoginView, GetAllBooksView,
    CreateBookView, RetrieveBookView, UpdateBookView, DeleteBookView
)

urlpatterns = [
    path('signup/', AdminSignupView.as_view(), name='signup'),
    path('login/', AdminLoginView.as_view(), name='login'),
    path('books/', GetAllBooksView.as_view(), name='get_all_books'),
    path('books/create/', CreateBookView.as_view(), name='create_book'),
    path('books/<int:pk>/', RetrieveBookView.as_view(), name='retrieve_book'),
    path('books/update/<int:pk>/', UpdateBookView.as_view(), name='update_book'),
    path('books/delete/<int:pk>/', DeleteBookView.as_view(), name='delete_book'),
]
