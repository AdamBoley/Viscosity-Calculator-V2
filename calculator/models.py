from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from decimal import Decimal


TYPE = ((0, 'Suspended Flow Viscometer'), (1, 'Reverse Flow Viscometer'))


class Viscometer(models.Model):
    """
    Model for a viscometer
    size field indicates the size of the viscometer for ordering purposes:
    0.0 indicates size 0
    0.5 indicates size 0C
    1.0 indicates size 1 or size 2 reverse
    1.5 indicates size 1C or size 3 reverse
    2.0 indicates size 2 suspended or size 4 reverse
    etc
    serial_number is for the serial code of a viscometer, e.g. L2C_93159
    constant is the viscometer's constant, e.g. 2.748
    type indicates the type - suspended flow or reverse flow
    calibration_date is the date in the past that the viscometer was calibrated
    expiry_date is the date beyond which the viscometer is no longer calibrated

    The Python linter can go and bugger itself with a rusty variable
    """
    size = models.DecimalField(max_digits=2, decimal_places=1, validators=[MinValueValidator(Decimal('0.0')), MaxValueValidator(Decimal('10.0'))])  # noqa: E501
    serial_number = models.CharField(max_length=20)
    constant = models.DecimalField(max_digits=8, decimal_places=7, validators=[MinValueValidator(Decimal('0.0')), MaxValueValidator(Decimal('100.0'))])  # noqa: E501
    type = models.IntegerField(choices=TYPE)
    calibration_date = models.DateField(auto_now_add=False)
    expiry_date = models.DateField(auto_now_add=False)

    class Meta:
        """
        Meta class for Viscometer model
        specifies that viscometers should be ordered by type and then size
        So that all suspended flow viscometers appear first,
        followed by reverse flow viscometers
        Within each type ordered, viscometers are ordered by size
        so that they appear in size order
        """
        ordering = ['type', 'size']

    def __str__(self):
        """
        Magic string method to return full name of viscometer
        """
        return f"L{self.serial_number}"
