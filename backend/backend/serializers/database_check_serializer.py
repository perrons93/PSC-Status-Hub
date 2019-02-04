from rest_framework import serializers
from backend.models.database_check_model import DatabaseCheckModel

# Serializers define the API representation
class DatabaseCheckSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DatabaseCheckModel
        fields = '__all__'
