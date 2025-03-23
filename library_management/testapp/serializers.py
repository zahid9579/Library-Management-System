from rest_framework import serializers
from testapp.models import User, Book

# Admin Serializer
class AdminSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['email', 'name', 'password', 'password2']
        extra_kwargs={
            'password': {'write_only': True}
        }
        
    # Validating password and confirm password while signup
    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2: 
            raise serializers.ValidationError("password and confirm password doesn't match")
        return attrs
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
    
# Admin Login Serializer
class AdminLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ['email', 'password']
        
        
# Book Serializer
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
